import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  image: string;
  profile: string;
  link: string;
  username: string;
  date: string;
  like: number;
  comments: number;
  title: string;
  content: string;
};

const Card = ({
  image,
  profile,
  link,
  username,
  date,
  like,
  comments,
  title,
  content,
}: Props) => {
  return (
    <div className="w-84 m-4 drop-shadow-md bg-white rounded-xl flex flex-col">
      <Link href={link}>
        <Image src={image} alt="Image" width={300} height={200} />
      </Link>
      <div className="p-4 flex flex-col">
        <div className="h-40">
          <h4 className="text-2xl font-bold">{title}</h4>
          <p>{content}</p>
        </div>
        <div className="text-gray-500">
          <span>{date}</span>
          <span>&nbsp;·&nbsp;</span>
          <span>{comments}개의 댓글</span>
        </div>
      </div>
      <div className="p-4 flex border-t">
        <Image src={profile} alt="Image" width={48} height={48} />
        <div>by {username}</div>
        <div className="ml-auto">{like}</div>
      </div>
    </div>
  );
};

export default Card;
