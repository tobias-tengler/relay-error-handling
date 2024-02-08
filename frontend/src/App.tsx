import "./App.css";
import { graphql, useFragment, useLazyLoadQuery } from "react-relay";
import { AppQuery } from "./__generated__/AppQuery.graphql";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { App_book$key } from "./__generated__/App_book.graphql";
import { App_author$key } from "./__generated__/App_author.graphql";

function App() {
  return (
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      <Suspense fallback={<p>Loading...</p>}>
        <BookFetcher />
      </Suspense>
    </ErrorBoundary>
  );
}

function BookFetcher() {
  const data = useLazyLoadQuery<AppQuery>(
    graphql`
      query AppQuery @nullBubbling(enable: false) {
        book {
          ...App_book
        }
      }
    `,
    {}
  );

  return (
    <div>
      <p>A book: </p>

      <ErrorBoundary fallback={<p>Failed to get the book</p>}>
        <Book bookKey={data.book} />
      </ErrorBoundary>
    </div>
  );
}

function Book({ bookKey }: { bookKey: App_book$key }) {
  const book = useFragment(
    graphql`
      fragment App_book on Book {
        title
        author {
          ...App_author
        }
      }
    `,
    bookKey
  );

  return (
    <div>
      <h2>{book.title}</h2>
      <ErrorBoundary fallback={<p>Failed to get the author</p>}>
        {book.author ? (
          <Author authorKey={book.author} />
        ) : (
          <p>Unknown author</p>
        )}
      </ErrorBoundary>
    </div>
  );
}

function Author({ authorKey }: { authorKey: App_author$key }) {
  const author = useFragment(
    graphql`
      fragment App_author on Author {
        name
      }
    `,
    authorKey
  );

  return <p>By {author.name}</p>;
}

export default App;
