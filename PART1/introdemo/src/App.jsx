const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    { name: 'Fundamentals of React', exercise: 10 },
    { name: 'Using props to pass data', exercise: 7 },
    { name: 'State of a component', exercise: 14 },
  ];

  return (
    <div>
      <Header name={course} />
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}

const Header = (props) => {
  return (
    <p>Course Name: {props.name}</p>
  );

}

const Content = ({parts}) => {
  return (
    <>
    <Part partname={parts[0].name} exercise={parts[0].exercise}/>
    <Part partname={parts[1].name} exercise={parts[1].exercise}/>
    <Part partname={parts[2].name} exercise={parts[2].exercise}/>

    </>
  );
}

const Part = ({partname,exercise}) => {
  return(
    <>
  <p>Part:{partname} {'=>'} No. of Exercises:{exercise}</p>
  </>
  );
}

const Total = ({parts}) => {
  const sum=parts[0].exercise+parts[1].exercise+parts[2].exercise
  return (
    <p>
    Total: {sum}
    </p>

  )
}


export default App

