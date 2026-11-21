import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { education, workExperience } from '@/data/about';
import { companyAchievements, courseDetails, projectDetails, type DetailGroup } from '@/data/career';
import { projects } from '@/data/projects';
import { resumeContact } from '@/data/resume';
import styles from './career.module.css';

export const metadata: Metadata = { title: '경력기술서' };

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className={styles.bullets}>
      {items.map((item) => (
        <li key={item}>
          {item.split(/<\/?strong>/g).map((text, index) =>
            index % 2 === 1 ? <strong key={index}>{text}</strong> : text
          )}
        </li>
      ))}
    </ul>
  );
}

function DetailList({ groups }: { groups: DetailGroup[] }) {
  return (
    <dl className={styles.details}>
      {groups.map(({ title, items }) => (
        <div key={title}>
          <dt>{title}</dt>
          <dd><BulletList items={items} /></dd>
        </div>
      ))}
    </dl>
  );
}

function ProjectCard({ slug }: { slug: string }) {
  const project = projects.find((item) => item.slug === slug);
  if (!project) return null;
  const detail = projectDetails[slug];

  return (
    <article className={styles.card}>
      <header className={styles.cardHeading}>
        <h4>{project.title}</h4>
        <p>{project.period}</p>
      </header>
      <p className={styles.description}>{detail?.description ?? project.description}</p>
      <section className={styles.cardSection}>
        <h5>담당 업무</h5>
        {detail ? <DetailList groups={detail.responsibilities} /> : <BulletList items={project.roles} />}
      </section>
      {detail && (
        <section className={styles.cardSection}>
          <h5>성과</h5>
          {Array.isArray(detail.achievements) ? (
            <BulletList items={detail.achievements} />
          ) : (
            <section className={styles.caseStudy}>
              <h6>{detail.achievements.title}</h6>
              <DetailList groups={detail.achievements.groups} />
            </section>
          )}
        </section>
      )}
    </article>
  );
}

function CareerSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className={styles.section}>
      <h3>{title}</h3>
      {children}
    </section>
  );
}

type ExperienceProps = {
  title: string;
  period: string;
  position: string;
  summary: string;
  children: ReactNode;
};

function Experience({ title, period, position, summary, children }: ExperienceProps) {
  return (
    <article className={styles.experience}>
      <header className={styles.overview}>
        <h2>{title}</h2>
        <div className={styles.meta}>
          <p>{period}</p>
          <p>{position}</p>
        </div>
        <p className={styles.summary}>{summary}</p>
      </header>
      <div className={styles.content}>{children}</div>
    </article>
  );
}

export default function CareerPage() {
  return (
    <div className={styles.document}>
      <header className={styles.heading}>
        <div>
          <h1 id="page-title">경력기술서</h1>
          <p>{resumeContact.name} · {resumeContact.jobTitle}</p>
        </div>
        <p className={styles.email}><a href={`mailto:${resumeContact.email}`}>{resumeContact.email}</a></p>
      </header>
      {workExperience.map((job) => {
        const achievements = companyAchievements[job.company];
        return (
          <Experience
            key={job.company}
            title={job.company}
            period={job.period}
            position={job.position}
            summary={job.summary}
          >
            <CareerSection title="담당 업무">
              <BulletList items={job.responsibilities} />
            </CareerSection>
            {achievements && (
              <CareerSection title="핵심 성과">
                <DetailList groups={achievements} />
              </CareerSection>
            )}
            {job.projectSlugs.length > 0 && (
              <CareerSection title="프로젝트">
                <div className={styles.cards}>
                  {job.projectSlugs.map((slug) => <ProjectCard key={slug} slug={slug} />)}
                </div>
              </CareerSection>
            )}
          </Experience>
        );
      })}
      <Experience
        title={education.title}
        period={education.period}
        position={courseDetails.track}
        summary={courseDetails.summary}
      >
        <CareerSection title="교육 내용">
          <BulletList items={courseDetails.curriculum} />
        </CareerSection>
        <CareerSection title="수료 성과">
          <BulletList items={courseDetails.awards} />
        </CareerSection>
        <CareerSection title="프로젝트">
          <ProjectCard slug={courseDetails.projectSlug} />
        </CareerSection>
      </Experience>
    </div>
  );
}
