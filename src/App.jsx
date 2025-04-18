import './App.css'
import ControlledField from './Components/ControlledField/ControlledField'
import FormAction from './Components/FormAction/FormAction'
import HookForm from './Components/HookForm/HookForm'
import SimpleForm from './Components/SimpleForm/SimpleForm'

function App() {

  return (
    <>
      <div >
        <h1 className='text-center'>Explore React Form</h1>
        {/* <SimpleForm></SimpleForm> */}
        {/* <FormAction></FormAction> */}
        {/* <ControlledField></ControlledField> */}
        <HookForm></HookForm>
      </div>
    </>
  )
}

export default App
