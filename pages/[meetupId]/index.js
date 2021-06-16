import MeetupDetail from '../../components/meetups/MeetupDetail'

function MeetupDetails (props) {
  return (
    <MeetupDetail
      image='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg'
      title='First Meetup'
      address='Some Street 5, Some City'
      description='This is a first meetup'
    />
  )
}

export function getStaticPaths () {
  return {
    fallback: false,
    paths: [
      { params: {
        meetupId: 'm1'
      }
      }
    ]
  }
}

export async function getStaticProps (context) {
  const meetupId = context.params.meetupId
  console.log(meetupId)
  return {
    props: {
      meetupData: {
        id: meetupId,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
        title: 'First Meetup',
        address: 'Some Street 5, Some City',
        description: 'This is a first meetup'
      }
    }
  }
}

export default MeetupDetails
