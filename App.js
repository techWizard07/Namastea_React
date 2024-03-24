const heading=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h2",{id:"heading"},"HELLO WORLD FROM REACT"),React.createElement("h2",{id:"heading"},"Hello world from react")]));
    console.log(heading);

    const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading);