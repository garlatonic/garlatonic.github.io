import type { Challenge } from "@/data/project-challenges/types";
import ComparisonViewer from "./ComparisonViewer";
import styles from "./challenge.module.css";

export default function ProjectChallenge({ challenge, titleId }: { challenge: Challenge; titleId: string }) {
  const { title, problem, solution, keywords, comparisons = [], metrics, code } = challenge;
  const [primary, ...additional] = comparisons;
  return (
    <section className={styles.challenge} aria-labelledby={titleId}>
      <h3 id={titleId}>{title}</h3>
      <p className={styles.lead}>{problem}</p>
      <div className={styles.caseBody}>
        <div className={styles.result}>
          <small>해결 방안</small>
          <p>{solution}</p>
          {metrics && (
            <dl className={styles.metrics} aria-label="개선 결과">
              {metrics.map(({ label, value }) => (
                <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
              ))}
            </dl>
          )}
        </div>
        {primary && (
          <div className={styles.evidence}>
            <ComparisonViewer comparison={primary} />
            {additional.map((comparison) => (
              <details key={comparison.title} className={styles.disclosure}>
                <summary>{comparison.title} 전후 비교</summary>
                <ComparisonViewer comparison={comparison} />
              </details>
            ))}
          </div>
        )}
      </div>
      <div className={styles.supplement}>
        {code && (
          <details className={styles.disclosure}>
            <summary>구현 코드 · {code.caption}</summary>
            <pre tabIndex={0} aria-label={code.caption}><code>{code.source}</code></pre>
          </details>
        )}
        <ul className={styles.keywords} role="list" aria-label="관련 키워드">
          {keywords.map((keyword) => <li key={keyword}>{keyword}</li>)}
        </ul>
      </div>
    </section>
  );
}
