"use client";

import Image from "next/image";
import { useId, useRef } from "react";
import type { ChallengeImage, ImageComparison } from "@/data/project-challenges/types";
import styles from "./challenge.module.css";

const versions = [
  { key: "before", label: "개선 전" },
  { key: "after", label: "개선 후" },
] as const;

function ComparisonShot({ image }: { image: ChallengeImage }) {
  const dialogId = useId();
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement>(null);
  const dialogCommand = { command: "show-modal", commandfor: dialogId };

  return (
    <figure className={styles.shot}>
      <button
        {...dialogCommand}
        ref={opener}
        type="button"
        className={styles.frame}
        aria-haspopup="dialog"
        aria-label={`${image.caption} 크게 보기`}
        onClick={(event) => {
          if (!("commandForElement" in event.currentTarget)) dialog.current?.showModal();
        }}
      >
        <Image src={image.src} alt={image.alt} unoptimized />
        {image.highlight && <i className={styles.highlight} style={image.highlight} aria-hidden="true" />}
      </button>
      <dialog
        id={dialogId}
        ref={dialog}
        className={styles.imageDialog}
        aria-label={image.caption}
        closedby="any"
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
        onClose={() => opener.current?.focus({ preventScroll: true })}
      >
        <div className={styles.dialogContent}>
          <Image src={image.src} alt={image.alt} unoptimized />
          <div className={styles.dialogFooter}>
            <span>{image.caption}</span>
            <form method="dialog"><button type="submit">닫기</button></form>
          </div>
        </div>
      </dialog>
      <figcaption>
        <strong>{image.caption}</strong>
        {image.detail && <span>{image.detail}</span>}
      </figcaption>
    </figure>
  );
}

export default function ComparisonViewer({ comparison }: { comparison: ImageComparison }) {
  const groupId = useId();

  return (
    <div className={styles.comparison} role="group" aria-label={comparison.title}>
      <div className={styles.switcher} role="radiogroup" aria-label={`${comparison.title} 전후 선택`}>
        {versions.map(({ key, label }) => (
          <label key={key}>
            <input type="radio" name={groupId} value={key} defaultChecked={key === "before"} />
            {label}
          </label>
        ))}
      </div>
      <div className={styles.stage} aria-live="polite">
        {versions.map(({ key }) => (
          <div key={key} data-version={key} className={styles.versionPanel}>
            {comparison[key].map((image) => (
              <ComparisonShot key={image.src.src} image={image} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
