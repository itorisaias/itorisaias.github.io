import type { MetaFunction } from "@remix-run/node";
import { CLASS_LIST, PERSONAL_INFO, SOCIAL_LINKS, WORK_LIST } from "~/constants";

export const meta: MetaFunction = () => {
  return [
    { title: PERSONAL_INFO.name },
    { name: "description", content: PERSONAL_INFO.description },
  ];
};

export default function Index() {
  return (
    <>
      <main className="flex flex-1 flex-col pt-3">
        <div className="container mx-auto px-4 space-y-3">
          <div className="">
            <h1 className="text-8xl font-bold">{PERSONAL_INFO.name}</h1>
            <h2>{PERSONAL_INFO.description}</h2>
            <p>Atualmente trabalhando em <a href="/#">5by5</a></p>
          </div>

          <div className="flex justify-center space-x-5">
            {SOCIAL_LINKS.map((social, index) => (
              <a key={`social-${index}`} href={social.link} title={`${social.title} ${PERSONAL_INFO.name}`}>
                <div className="bg-background p-3 duration-200 hover:border-border-hover">
                  <social.icon className="w-6 h-6" />
                </div>
              </a>
            ))}
          </div>

          <section>
            <h2 className="font-bold">Trabalhos</h2>
            <div className="flex flex-col space-y-1">
              {WORK_LIST.map((work, index) => (
                <a key={`work-${index}`} href={work.link} className="group w-full">
                  <h3>{work.company}</h3>
                  <p>{work.title}</p>
                  <hr className="h-px w-full bg-border duration-200 group-hover:bg-border-hover" />
                </a>
              ))}

            </div>
          </section>

          <section>
            <h2 className="font-bold">Aulas</h2>
            <div className="flex flex-col space-y-1">
              {CLASS_LIST.map((classroom, index) => (
                <a key={`classroom-${index}`} href={classroom.link} className="group w-full">
                  <h3>{classroom.title}</h3>
                  <p>{classroom.university}</p>
                  <hr className="h-px w-full bg-border duration-200 group-hover:bg-border-hover" />
                </a>
              ))}
            </div>
          </section>
        </div>
      </main >

      <footer className="py-2 md:mt-20">
        <div className="container flex justify-end text-muted">
          <span>© {(new Date()).getFullYear()} - {PERSONAL_INFO.name}</span>
        </div>
      </footer>
    </>
  );
}
