This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Peter's Cooked-O-Meter
Peter's Cooked-O-Meter is a website that allows UC Irvine students to input the courses they plan to take along with the professors they plan to take them with and get a rating on a scale from 1-5 of how difficult (or "cooked") their schedule is! This rating is based off of real reviews from past students on ratemyprofessors.com, and allows students to gauge whether or not their potential course load seems manageable or not.

## How it works
Our webpage fetches data from the ratemyprofessor API and uses it to populate search results for the professors and classes on our webpage. Data is first fetched from the ratemyprofessors search page, which then allows the website to fetch data from the professor's individual page, and finally uses this to fetch data about the specific class inputted by the user.

<img width="1802" height="697" alt="image" src="https://github.com/user-attachments/assets/f2166e9c-7bae-4f7f-8183-0dff3448e8e3" />

Using the average difficulty rating for each inputted class, we created a formula that accounts for both the individual difficulty of each class and the total number of classes the user has inputted. The formula returns a rating on a scale from 1 to 5 (5 being the most difficult), which is then displayed on a "meter" with a lighthearted message describing how "cooked" the load is.

<img width="342" height="241" alt="image" src="https://github.com/user-attachments/assets/8cb27821-df35-4ced-9846-0bcf1d0ab43b" />

