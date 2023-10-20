import Card from "@/components/Card";

export default function Home() {
  return (
    <div className="p-4 bg-gray-50">
      <main className="p-16 items-center w-full flex min-h-screen flex-col flex-nowrap">
      <header>
        <div className="text-4xl font-bold">Jake Yubin Kim's Devlog</div>
      </header>
      <div className="mt-16"></div>
        <div className="flex flex-wrap justify-center">
          <Card
            title="Hello"
            username="Kim"
            profile="/next.svg"
            comments={3}
            content="와 성공"
            date="2023/10/20"
            image="/next.svg"
            like={3}
            link="https://naver.com"
          />
          <Card
            title="Hello"
            username="Kim"
            profile="/next.svg"
            comments={3}
            content="와 성공"
            date="2023/10/20"
            image="/next.svg"
            like={3}
            link="https://naver.com"
          />
          <Card
            title="Hello"
            username="Kim"
            profile="/next.svg"
            comments={3}
            content="와 성공"
            date="2023/10/20"
            image="/next.svg"
            like={3}
            link="https://naver.com"
          />
          <Card
            title="Hello"
            username="Kim"
            profile="/next.svg"
            comments={3}
            content="와 성공"
            date="2023/10/20"
            image="/next.svg"
            like={3}
            link="https://naver.com"
          />
          <Card
            title="Hello"
            username="Kim"
            profile="/next.svg"
            comments={3}
            content="와 성공"
            date="2023/10/20"
            image="/next.svg"
            like={3}
            link="https://naver.com"
          />
          <Card
            title="Hello"
            username="Kim"
            profile="/next.svg"
            comments={3}
            content="와 성공"
            date="2023/10/20"
            image="/next.svg"
            like={3}
            link="https://naver.com"
          />
          <Card
            title="Hello"
            username="Kim"
            profile="/next.svg"
            comments={3}
            content="와 성공"
            date="2023/10/20"
            image="/next.svg"
            like={3}
            link="https://naver.com"
          />
          <Card
            title="Hello"
            username="Kim"
            profile="/next.svg"
            comments={3}
            content="와 성공"
            date="2023/10/20"
            image="/next.svg"
            like={3}
            link="https://naver.com"
          />
        </div>
      </main>
    </div>
  );
}
