
const textClip = (text: string) => {
 if(text.length<20) return
 return text.substring(0,20) + "..."
}

export default textClip