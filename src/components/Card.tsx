interface CardProps {
  title: string
  body: string
  href: string
}

export default function Card({ title, body, href }: CardProps) {
  return (
    <li className="link-card">
      <a href={href}>
        <h2>
          {title}
          <span>&rarr;</span>
        </h2>
        <p>{body}</p>
      </a>
    </li>
  );
}
