import { utapi } from "uploadthing";

// Configure Uploadthing
export const uploadFile = async (file) => {
  try {
    const response = await utapi.upload(file, {
      path: "your/custom/folder/path", // Customize as needed
    });
    return response;
  } catch (error) {
    console.error("File upload failed:", error);
    throw error;
  }
};
