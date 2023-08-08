import Link from "next/link";
import classess from "./PostItem.module.css";
import Image from "next/image";
const PostItem = ({ post }) => {
  const { title, image, excerpt, date, slug } = post;
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    yaer: "numeric",
  });
  const imagePath = `/images/posts/${slug}/${image}`;
  return (
    <li className={classess.post}>
      <Link>
        <a>
          <div className={classess.image}>
            <Image src={imagePath} alt={title} width={300} height={200} />
          </div>
          <div className={classess.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default PostItem;
