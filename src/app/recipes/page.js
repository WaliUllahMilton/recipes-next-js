export async function getAllRecipes() {
  try {
    const allRecipe = await fetch('https://dummyjson.com/recipes')
    const data = await allRecipe.json()
    // console.log(data)
    return data
  } catch (error) {
    throw new Error(error);
  }
}

const page = async() => {
  const data =await getAllRecipes()
    // console.log(data)
  return <div>
    {data?.recipes.map(e=>{
        <p key={e.id}>{e.name}</p>
    })}
  </div>;
};

export default page;
