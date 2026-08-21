const likeCount = 130;

let badge = (likeCount>100) ? '인기': '일반';


console.log(badge);

const message = 
"이 게시물은 " + (likeCount > 100 ? "인기" : "일반") + " 게시물이에요";
console.log(message);