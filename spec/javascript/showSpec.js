import GroupShowContainer from '../../app/javascript/react/container/GroupShowContainer'
import GroupTile from '../../app/javascript/react/components/GroupTile'
import CharitiesTile from '../../app/javascript/react/components/CharitiesTile'
import AttendiesTile from '../../app/javascript/react/components/AttendiesTile'
import fetchMock from 'fetch-mock'

describe('GroupsShowContainer', () => {
  let wrapper;
  let GroupData;

  beforeEach(() => {
    GroupData= {
      Group: {
        id: 1,
        location: "boston",
        title: 'Smash time',
        description: 'its the best',
        game: "game",
        start_date: "2000-12-31",
        end_date: "2000-12-31",
        donated_amount: "5",
        lat: "42.3539609",
        lng: "-71.05892310000002",
        created_at: "2018-10-18T14:57:36.088Z",
        charities: [{
          id: 2,
          name: "Wounded Warrior",
          description: "A good Charity",
          url: "https://www.woundedwarriorproject.org/",
          created_at: "2018-10-18T14:57:36.088Z"
        }],
        attendies:[{
          id: 2,
          name: "theo"
        }]
      }
    }

    fetchMock.get(`/api/v1/groups/${GroupData.group.id}`, {
      status: 200,
      body: GroupData
    });

    fetchMock.get(`/api/v1/groups/${GroupData.group.id}/reviews`, {
      status: 200,
      body: reviewsData
    })

    wrapper = mount(
      <GroupsShowContainer
        params={ { id: GroupData.Group.id } }
        />
    );
  })

  afterEach(fetchMock.restore)

  describe('Group show page', () => {
    it('should check if the h1 tag is rendered', (done) => {
      setTimeout(() => {
        expect(wrapper.find('h1').text()).toMatch(GroupData.group.name)
        done()
      }, 0)
    });

    it('should render the details of a specific group on the page', (done) => {
      setTimeout(() => {
        expect(wrapper.text()).toMatch(GroupData.group.description);
        expect(wrapper.text()).toMatch(GroupData.group.ABV);
        expect(wrapper.text()).toMatch(GroupData.group.style);
        done()
      }, 0)
    });

    it('should render the reviews of a specific group on the page', (done) => {
      setTimeout(() => {
        expect(wrapper.text()).toMatch(GroupData.group.reviews[0].body)
        expect(wrapper.text()).toMatch(GroupData.group.reviews[0].rating)
        expect(wrapper.text()).toMatch(GroupData.group.reviews[0].username)
        done()
      }, 0)
    })

    it('should render the review container component', (done) => {
     setTimeout(() => {
       expect(wrapper.find(ReviewContainer)).toBePresent()
       done()
     }, 0)
   })

   it('Review Container should render ReviewTiles', (done) => {
     setTimeout(() => {
       expect(wrapper.find(ReviewContainer).find(ReviewTile)).toBePresent()
       done()
     }, 0)
   })

   it('ReviewTiles should render Comment Tiles', (done) => {
     setTimeout(() => {
       expect(wrapper.find(ReviewContainer).find(ReviewTile).find(CommentTile)).toBePresent()
       done()
     }, 0)
   })

   it('Comment Tiles should render comments', (done) => {
     setTimeout(() => {
       expect(wrapper.text()).toMatch("COMMENT!")
       done()
     }, 0)
   })

   it('should have a Review Container', (done) => {
      setTimeout(() => {
        expect(wrapper.find(ReviewContainer)).toBePresent()
        done()
      }, 0)
    })

    it('should render the review container component with correct props', (done) => {
      setTimeout(() => {
        expect(wrapper.find(ReviewContainer).props()).toEqual({
          groupId: GroupData.group.id
        })
        done()
      }, 0)
    })
  })
})
