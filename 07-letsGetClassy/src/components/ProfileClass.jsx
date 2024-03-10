import React from "react";

// class ProfileClass extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       line: "Hello",
//       img: "",
//     };
//   }

//   componentDidMount() {
//     this.timer = setInterval(() => {
//       console.log("ma ka naka saki naka");
//     }, 1000);
//     console.log("Component Did Mount");
//   }

//   componentWillUnmount() {
//     clearInterval(this.timer);
//     console.log("Component Will Unmount");
//   }

//   render() {
//     console.log("Render");
//     return (
//       <>
//         <h1>Kabir singh : {this.state.line}</h1>
//         <img src={this.state.img} alt="" />
//         <button
//           onClick={() => {
//             this.setState({
//               line: "Kisne touch kia usko chadarmod, wanna wow wow wanna wow wow wanna wow wanna wow",
//               img: "https://imagevars.gulfnews.com/2019/04/09/tab-Shahid-Kapoor-in-Kabir-Singh-1554797025116_16a450597b9_large.jpg",
//             });
//           }}
//         >
//           Priti-Kabir ki maal
//         </button>
//       </>
//     );
//   }
// }

// export default ProfileClass;

import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 0,
      userInfo: {
        name: "Vivek",
        followers: "",
        avatar_url: "",
      },
    };
    console.log("Constructor for " + this.props.name);
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/vivekpanchal2");
    const json = await data.json();

    this.setState({
      name: json.name,
      followers: json.followers,
      avatar_url: json.avatar_url,
    });

    console.log("API call for " + this.props.name);
  }

  render() {
    const { count } = this.state; //destructuring state o we dont need to write this.state.count every time

    console.log("render for " + this.props.name);
    return (
      <>
        <h1>Profile Using Class Component</h1>
        <img src={this.state.avatar_url} alt="" />
        <h2>Name: {this.state.name}</h2>
        <h2>followers: {this.state.followers}</h2>

        {/* <h3>Count : {count}</h3>
        <button
          onClick={() => {
            if (count == 0) {
              this.setState({
                count: 2,
              });
            } else {
              this.setState({
                count: 0,
              });
            }
          }}
        >
          Set Count
        </button> */}
      </>
    );
  }
}

export default ProfileClass;
