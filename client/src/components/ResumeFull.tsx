import React from 'react';
import { Document, Section, SubHeading, List } from './ResumeComponents';

const ResumeFull: React.FC = () => {
  return (
    <Document>
      <div style={{ textAlign: 'center', marginBottom: '1em' }}>
        <h1 style={{ fontSize: '2.5em', marginBottom: '0.2em' }}>First Last</h1>
        <div>123 Street Name, Town, State 12345</div>
        <div>123-456-7890 | email@gmail.com</div>
        <div>linkedin.com/in/username | github.com/username</div>
      </div>

      <Section title="Education">
        <SubHeading left="State University" right="Sep. 2017 -- May 2021" subleft="Bachelor of Science in Computer Science" subright="City, State" />
      </Section>

      <Section title="Relevant Coursework">
        <List items={['Data Structures', 'Software Methodology', 'Algorithms Analysis', 'Database Management', 'Artificial Intelligence', 'Internet Technology', 'Systems Programming', 'Computer Architecture']} isGrid={true} />
      </Section>

      <Section title="Experience">
        <SubHeading left="Electronics Company" right="May 2020 -- August 2020" subleft="Software Engineer Intern" subright="City, State" />
        <List items={[
          'Developed a service to automatically perform a set of unit tests daily on a product in development to decrease time needed for team members to identify and fix bugs/issues.',
          'Incorporated scripts using Python and PowerShell to aggregate XML test results into an organized format and to load the latest build code onto the hardware, so that daily testing can be performed.',
          'Utilized Jenkins to provide a continuous integration service to automate the entire process of loading the latest build code and test files, running the tests, and generating a report of the results once per day.',
          'Explored ways to visualize and send a daily report of test results to team members using HTML, JavaScript, and CSS.'
        ]} />

        <SubHeading left="Startup, Inc" right="May 2019 -- August 2019" subleft="Front End Developer Intern" subright="City, State" />
        <List items={[
          'Assisted in development of the front end of a mobile application for iOS/Android using Dart and the Flutter framework.',
          'Worked with Google Firebase to manage user input data across multiple platforms including web and mobile apps.',
          'Collaborated with team members using version control systems such as Git to organize modifications and assign tasks.',
          'Utilized Android Studio as a development environment to visualize the application in both iOS and Android.'
        ]} />
      </Section>

      <Section title="Projects">
        <SubHeading left="Gym Reservation Bot" right="January 2021" subleft="Python, Selenium, Google Cloud Console" subright="" />
        <List items={[
          'Developed an automatic bot using Python and Google Cloud Console to register myself for a timeslot at my school gym.',
          'Implemented Selenium to create an instance of Chrome to interact with the correct elements of the web page.',
          'Created a Linux virtual machine to run on Google Cloud so that the program can run every day from the cloud.',
          'Used Cron to schedule the program to execute automatically at 11 AM every morning so a reservation is made for me.'
        ]} />

        <SubHeading left="Ticket Price Calculator App" right="November 2020" subleft="Java, Android Studio" subright="" />
        <List items={[
          'Created an Android application using Java and Android Studio to calculate ticket prices for trips to museums in NYC.',
          'Processed user input information in the back-end of the app to return a subtotal price based on the tickets selected.',
          'Utilized the layout editor to create a UI for the application to allow different scenes to interact with each other.'
        ]} />

        <SubHeading left="Transaction Management GUI" right="October 2020" subleft="Java, Eclipse, JavaFX" subright="" />
        <List items={[
          'Designed a sample banking transaction system using Java to simulate the common functions of using a bank account.',
          'Used JavaFX to create a GUI that supports actions such as creating an account, deposit, withdraw, list all accounts, etc.',
          'Implemented object-oriented programming practices such as inheritance to create different account types and databases.'
        ]} />
      </Section>

      <Section title="Technical Skills">
        <List items={[
          'Languages: Python, Java, C, HTML/CSS, JavaScript, SQL',
          'Developer Tools: VS Code, Eclipse, Google Cloud Platform, Android Studio',
          'Technologies/Frameworks: Linux, Jenkins, GitHub, JUnit, WordPress'
        ]} />
      </Section>

      <Section title="Leadership / Extracurricular">
        <SubHeading left="Fraternity" right="Spring 2020 -- Present" subleft="President" subright="University Name" />
        <List items={[
          'Achieved a 4-star fraternity ranking by the Office of Fraternity and Sorority Affairs (highest possible ranking).',
          'Managed executive board of 5 members and ran weekly meetings to oversee progress in essential parts of the chapter.',
          'Led chapter of 30+ members to work towards goals that improve and promote community service, academics, and unity.'
        ]} />
      </Section>
    </Document>
  );
};

export default ResumeFull;
