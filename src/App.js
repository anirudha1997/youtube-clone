import "./App.css";
import Body from "./components/Body";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchVideo from "./components/WatchVideo";
import VideoSection from "./components/VideoSection";
import SearchResults from "./components/SearchResults";
import "./assets/css/scrollbar.css";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <VideoSection />,
        },
        {
          path: "/watch",
          element: <WatchVideo />,
        },
        {
          path: "/results",
          element: <SearchResults />,
        },
        {
          path: "/results/watch",
          element: <WatchVideo />,
        },
      ],
    },
  ]);

  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
