function Title (props: {name: string, age: number}) {
    const { name, age } = props;
    // const { age} = props;
    return(
        <div>
           Name: {name}
           Age: {age}
        </div>
    );
}

export default Title;