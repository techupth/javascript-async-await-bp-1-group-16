// Exercise #4
let getJohnProfile = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
    );
  });
};
// Start coding here
let fetchJohnProfile = async() => {
  try{
    console.log(await getJohnProfile());
  }catch(error){
    console.log(error);
  }
}

fetchJohnProfile();
