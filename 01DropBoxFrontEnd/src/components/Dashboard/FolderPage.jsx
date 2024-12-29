import { useParams } from "react-router-dom";

const FolderPage = () => {
  const { folderName } = useParams();

  return (
    <div>
      <h1>Dashboard for {decodeURIComponent(folderName)}</h1>
      {/* Add folder-specific content here */}
    </div>
  );
};

export default FolderPage;
