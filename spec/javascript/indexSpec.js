import GroupsContianer from '../../app/javascript/react/container/GroupsContainer'
import GroupTile from '../../app/javascript/react/components/GroupTile'

describe('GroupsContainer', () => {
  let wrapper;
  let data = [{
    id: 1,
    location: "boston",
    title: 'Smash time',
    description: 'its the best',
    game: "game",
    start_date: "2000-12-31",
    end_date: "2000-12-31",
    donated_amount: "5",
    lat: "42.3539609",
    lng: "-71.05892310000002"

  }]
  beforeEach(() => {
    wrapper = mount(
      <GroupTile
        id = {data[0].id}
        location = {data[0].location}
        title = {data[0].title}
        description = {data[0].description}
        game = {data[0].game}
        start_date = {data[0].start_date}
        end_date = {data[0].end_date}
        donated_amount = {data[0].donated_amount}
        lat = {data[0].lat}
        lng = {data[0].lng}
      />
    )
  })
  it('should have a list of beers on the index page', () => {
    expect(wrapper.find(GroupTile)).toBePresent();
  });
  it('should check if the h3 tag is rendered', () => {
    expect(wrapper.find('h3')).toBePresent()
  });
  it('should have a list of beers on the index page', () => {
    expect(wrapper.find('br')).toBePresent()
  });

});
