import { screen, render, within } from "@testing-library/react";
import UserList from "./UserList";

function renderComponent(){
  const users = [
    {name: 'binh', email:"b@gmail.com"},
    {name: 'binh2', email:"b2@gmail.com"},
  ]

  render(<UserList users={users} />)

  return {
    users
  }
}

test('render the correct number of rows' , async () => {
  //render the component
  // const users = [
  //   {name: 'binh', email:"b@gmail.com"},
  //   {name: 'binh2', email:"b2@gmail.com"},
  // ]
  // const {container} = render(<UserList users={users} />)
  // render(<UserList users={users} />)
  //find all the rows in the table
  // screen.logTestingPlaygroundURL();
  // const rows = within(screen.getByTestId('users')).getAllByRole('row');
  //eslint-disable-next-line
  // const rows = container.querySelectorAll('tbody tr')


  renderComponent()
  const rows = within(screen.getByTestId('users')).getAllByRole('row')

  //assertion: correct number of rows in the table
  expect(rows).toHaveLength(2)

})

test('render the email and name of each user', () => {
  const {users} = renderComponent()

  for(let user of users){
    const name = screen.getByRole('cell', {name: user.name})
    const email = screen.getByRole('cell', {name: user.email})

    expect(name).toBeInTheDocument()
    expect(email).toBeInTheDocument()
  }
})