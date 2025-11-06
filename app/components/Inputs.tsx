import "./Main.css"

interface InputsProps {
  id: number;
  setClassList: React.Dispatch<React.SetStateAction<number[]>>;
  showScore: boolean;
}

import { useState, useEffect } from 'react';
import TrashButton from './TrashButton';
import { getSearchResults, getProfessorDetails, getProfessorRatings } from "../utils/rmpScraper";
import { CourseCode, Teacher } from '../types/teacher';

export default function Inputs ({id, setClassList, showScore}: InputsProps) {
  const [professorQuery, setProfessorQuery] = useState('');
  const [professorInput, setProfessorInput] = useState<Teacher | null>(null);
  const [professorList, setProfessorList] = useState<{ node: Teacher }[]>([]);
  const [showProfessorList, setShowProfessorList] = useState<boolean>(false);

  const [courseQuery, setCourseQuery] = useState('');
  const [courseInput, setCourseInput] = useState<CourseCode | null>(null);
  const [courseList, setCourseList] = useState<CourseCode[]>([]);
  const [showCourseList, setShowCourseList] = useState<boolean>(false); 

  useEffect(() => {
    const delay = setTimeout(async () => {
      if (!professorQuery) {
        setProfessorList([]);
      }

      try {
        const professorSearchResults = await getSearchResults(professorQuery);
        setProfessorList(professorSearchResults);
      } catch (err) {
        console.log(err)
        setProfessorList([])
      }
    }, 300)

    return () => clearTimeout(delay);
  }, [professorQuery])

  useEffect(() => {
    const delay = setTimeout(async () => {
      if (!professorInput || !courseQuery) {
        setCourseList([]);
        return;
      }

      try {
        const courseSearchResults = await getProfessorDetails(professorInput.id);
        const filteredCourseSearchResults = courseSearchResults.courseCodes.filter(course => 
          course.courseName.toLowerCase().includes(courseQuery.toLowerCase())
        );
        setCourseList(filteredCourseSearchResults);
      } catch (err) {
        console.log(err)
        setCourseList([])
      }
    }, 300)

    return () => clearTimeout(delay);
  }, [courseQuery, professorInput])

  /*
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value;
    setTotalScore((prev: number) => prev - localValue + newValue);
    //setLocalValue(newValue);
    setShowTotalScore(false)
  }
  */

  function selectProfessor (professor: Teacher) {
    setProfessorInput(professor)
    setProfessorQuery(professor.lastName)
    setShowProfessorList(false)
  }

  function selectCourse (course: CourseCode) {
    setCourseInput(course)
    setCourseQuery(course.courseName)
    setShowCourseList(false)
  }

  return (
    <div className="class-box">

      <input
        placeholder = "Professor"
        value={professorQuery}
        onChange = {(e) => {
          setProfessorQuery(e.target.value);
          setShowProfessorList(e.target.value.length > 0);
        }}
      />
          {showProfessorList && (
            <div className="professor-list">
              {professorList.map((professor, index) => (
                <button
                  key={index}
                  onClick={() => selectProfessor(professor.node)}
                >
                  {professor.node.firstName} {professor.node.lastName}
                </button>
              ))}
            </div>
          )}


      <input
        placeholder = "Class"
        value={courseQuery}
        onChange = {(e) => {
          setCourseQuery(e.target.value);
          setShowCourseList(e.target.value.length > 0);
        }}/>

      {showCourseList && courseList != null && courseList.map((course, index) => (
        <button
          key={index} 
          onClick = {() => selectCourse(course)}
        > 
          {course.courseName}
        </button>
      ))}

      <TrashButton id = {id} setClassList = {setClassList}/>
    </div>
  )
}