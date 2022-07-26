
export default function Layout(props: any) {
  return (
    <>
    <div className='layout'>
      <header>
        <h1 className='header'>
          Sean Outram
        </h1>
      </header>
      {props.children}
    </div>
    </>
  )
}