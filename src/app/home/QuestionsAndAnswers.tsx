import { Link } from "components/documentation";

const QAS = [
  {
    question:
      "Q1. What is a resume builder? Why resume builder is better than resume template doc?",
    answer: (
      <>
        <p>
          There are two ways to create a resume today. One option is to use a
          resume template, such as an office/google doc, and customize it
          according to your needs. The other option is to use a resume builder,
          an online tool that allows you to input your information and
          automatically generates a resume for you.
        </p>
        <p>
          Using a resume template requires manual formatting work, like copying
          and pasting text sections and adjusting spacing, which can be
          time-consuming and error-prone. It is easy to run into formatting
          issues, such as using different bullet points or font styles after
          copying and pasting. On the other hand, a resume builder like
          ResumeBuilder saves time and prevents formatting mistakes by
          automatically formatting the resume. It also offers the convenience of
          easily changing font types or sizes with a simple click. In summary, a
          resume builder is easier to use compared to a resume template.
        </p>
      </>
    ),
  },
  {
    question:
      "Q2. What uniquely sets ResumeBuilder apart from other resume builders and templates?",
    answer: (
      <>
        <p>
          Other than ResumeBuilder, there are some great free resume builders out
          there, e.g. <Link href="https://rxresu.me/">Reactive Resume</Link>,{" "}
          <Link href="https://flowcv.com/">FlowCV</Link>. However, ResumeBuilder
          stands out with 2 distinctive features:
        </p>{" "}
        <p>
          <span className="font-semibold">
            1. ResumeBuilder is designed specifically for the U.S. job market and
            best practices.
          </span>
          <br />
          Unlike other resume builders that target a global audience and offer
          many customization options, ResumeBuilder intentionally only offers
          options that are aligned with U.S. best practices. For example, it
          excludes the option to add a profile picture to avoid bias and
          discrimination. It offers only the core sections, e.g. profile, work
          experience, education, and skills, while omitting unnecessary sections
          like references. Additionally, ResumeBuilder only offers a top down
          single column resume design as opposed to two column design, because
          single column design works best for AST. <br />{" "}
        </p>
        <p>
          <span className="font-semibold">
            2. ResumeBuilder is super privacy focus.
          </span>{" "}
          <br />
          While other resume builders may require email sign up and store user
          data in their databases, ResumeBuilder believes that resume data should
          remain private and accessible only on user's local machine. Therefore,
          ResumeBuilder doesn't require sign up to use the app, and all inputted
          data is stored in user's browser that only user has access to.
        </p>
      </>
    ),
  },
  {
    question: "Q3. Who created ResumeBuilder and why?",
    answer: (
      <p>
        ResumeBuilder was created by{" "}
        <Link href="https://github.com/diwakar8004">Dhyanchand</Link> as a
        personal project to help students and job seekers build professional, ATS-friendly resumes. 
        Like many freshers, I faced multiple challenges while creating my first resume—improper 
        formatting, low ATS scores, and confusion about what employers actually look for.
        Over time, through learning, guidance, and reviewing resumes for friends and juniors, 
        I noticed that many students were repeating the same mistakes I had once made.
        This motivated me to build a tool that simplifies the entire resume-building process.
        I started working on this project during weekends, gradually integrating best 
        practices, clean design, and automation into ResumeBuilder. My hope is that 
        ResumeBuilder can help anyone quickly create a modern, professional resume 
        that follows industry standards and gives them the confidence to apply for 
        internships and jobs.
      </p>

    ),
  },
  {
    question: "Q4. How can I support ResumeBuilder?",
    answer: (
      <>
        <p>
          The best way to support ResumeBuilder is to share your thoughts and
          feedback with us to help further improve it. You can send us an email
          at{" "}
          <Link href="mailto:hello@resumebuilder.com">hello@resumebuilder.com</Link>.
        </p>
      </>
    ),
  },
];

export const QuestionsAndAnswers = () => {
  return (
    <section className="mx-auto max-w-3xl divide-y divide-gray-300 dark:divide-gray-600 lg:mt-4 lg:px-2 px-4">
      <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">Questions & Answers</h2>
      <div className="mt-6 divide-y divide-gray-300 dark:divide-gray-600">
        {QAS.map(({ question, answer }) => (
          <div key={question} className="py-6">
            <h3 className="font-semibold leading-7 text-gray-900 dark:text-gray-100">{question}</h3>
            <div className="mt-3 grid gap-2 leading-7 text-gray-600 dark:text-gray-400">
              {answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
