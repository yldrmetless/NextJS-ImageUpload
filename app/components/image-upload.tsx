"use client";

import React, { useState } from "react";
import Image from "next/image";
import { UploadDropzone } from "@uploadthing/react";

const ImageUpload = () => {
  const [imageUrl, setImageUrl] = useState<string>()  
  return (
    <div className="pt-24 max-w-4xl mx-auto">
      <UploadDropzone
        appearance = {{
            container: {
                border: "1px dotted blue"
            },
            uploadIcon: {
                color:"blue"
            }
        }}
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
        //   console.log("Files: ", res);
        //   alert("Upload Completed");
          setImageUrl(res[0].url)
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
      {
        imageUrl?.length ? (
            <div className=" mx-auto border border-gray-200 shadow-md mt-8">
                <Image className="mx-auto" src={imageUrl} alt="my image" width={500} height={300}/>
            </div>
        ) : (
            null
        )
      }
    </div>
  );
};

export default ImageUpload;
