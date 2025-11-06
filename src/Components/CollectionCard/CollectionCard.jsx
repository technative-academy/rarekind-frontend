import styles from "./CollectionCard.module.css";

export default function CollectionCard() {
  return (
    <section className={styles.card}>
      <h3>This is a collection card</h3>
      <p>TAG</p>
      <p>
        Created at:<time></time>
      </p>
      <p>
        Updated at:<time></time>
      </p>
    </section>
  );
}
