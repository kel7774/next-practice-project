import MeetupList from '../components/meetups/MeetupList'
const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a first meetup!'
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Some address 10, 12345 Some City',
    description: 'This is a second meetup!'
  }
]
function HomePage (props) {
  return (
    <MeetupList meetups={props.meetups} />
  )
}

// export async function getServerSideProps (context) {
//   // won't run during build process
//   // changes multiple times every second (ike dashboard)
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   }
// }

export async function getStaticProps () {
  // pre rendered, not fetched on second component cycle on the client
  // data fetching for pre-rendering
  // fetch data from database or api
  // always return object
  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
    revalidate: 10
  }
}

export default HomePage