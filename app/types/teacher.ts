export interface Teacher {
  __typename: "Teacher";
  avgDifficulty: number;
  avgRating: number;
  courseCodes: CourseCode[];
  department: string;
  departmentId: string;
  firstName: string;
  id: string;
  isProfCurrentUser: boolean;
  isSaved: boolean;
  lastName: string;
  legacyId: number;
  lockStatus: string;
  numRatings: number;
  ratings: RatingsConnection;
  ratingsDistribution: RatingsDistribution;
  relatedTeachers: RelatedTeacher[];
  school: School;
  teacherRatingTags: Tag[];
  wouldTakeAgainPercent: number;
}

export interface CourseCode {
  courseCount: number;
  courseName: string;
}

export interface RatingsConnection {
  edges: RatingEdge[];
  pageInfo: PageInfo;
}

export interface RatingEdge {
  cursor: string;
  node: Rating;
}

export interface Rating {
  __typename: "Rating";
  adminReviewedAt: string | null;
  attendanceMandatory: string;
  clarityRating: number | null;
  class: string | null;
  comment: string | null;
  createdByUser: boolean;
  date: string;
  difficultyRating: number | null;
  flagStatus: string;
  grade: string | null;
  helpfulRating: number | null;
  id: string;
  isForCredit: boolean;
  isForOnlineClass: boolean;
  legacyId: number;
  ratingTags: string;
  teacherNote: string | null;
  textbookUse: number | null;
  thumbs: Array<Record<string, unknown>>;
  thumbsDownTotal: number;
  thumbsUpTotal: number;
  wouldTakeAgain: boolean | null;
}

export interface PageInfo {
  endCursor: string | null;
  hasNextPage: boolean;
}

export interface RatingsDistribution {
  r1: number;
  r2: number;
  r3: number;
  r4: number;
  r5: number;
  total: number;
}

export interface RelatedTeacher {
  avgRating: number;
  firstName: string;
  id: string;
  lastName: string;
  legacyId: number;
}

export interface School {
  avgRating: number;
  city: string;
  country: string;
  id: string;
  isVisible: boolean;
  legacyId: number;
  name: string;
  numRatings: number;
  state: string;
}

export interface Tag {
  id: string;
  legacyId: number;
  tagCount: number;
  tagName: string;
}

export type TeacherPayload = Teacher;
