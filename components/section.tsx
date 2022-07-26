export default function section(props: any) {
  return (
    <>
    <section>
        <h2 className="header">{props.title}</h2>
      {props.children}
    </section>
    </>
  )
}