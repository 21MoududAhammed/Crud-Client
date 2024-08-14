import Card from "./Card";

export default function Display() {
  return (
    <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 gap-5 mx-3'>
        <Card/>
        <Card/>
        <Card/>
    </section>
  )
}
