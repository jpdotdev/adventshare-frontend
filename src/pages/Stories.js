const Stories = () => {


  async function getStories() {
    const response = await fetch('https://adventshare.onrender.com/stories');
    const stories = await response.json();
    let entry = stories.map(e => e.Story)
    console.log(entry)
  }

  getStories()

}

export default Stories