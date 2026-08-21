const mediaType = "image";

switch (mediaType) {
  case "image":
    console.log("사진 게시물이에요");
  case "video":
    console.log("동영상 게시물이에요");
  case "text":
    console.log("글 게시물이에요");
  default:
    console.log("알 수 없는 종류예요");
}