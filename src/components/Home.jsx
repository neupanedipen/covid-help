import Navbar from './Navbar';
import Hero from './Hero';
import Footer from './Footer';
import People from './people';

const Home = () => {
    return (
        <>
        <Navbar/>
      <Hero title="Covid Help Nepal" desc="A live portal to offer and get help for Covid-19 patients"/>
      <div className="container my-5">
        <h2>Live Help Requests List</h2>
        <table class="table text-center">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Full Name</th>
              <th scope="col">Bed Type</th>
              <th scope="col">Address</th>
              <th scope="col">No. Required</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {
              People.map(person => {
                return (
                  <tr>
                  <th scope="row">{person.id}</th>
                  <td>{person.name}</td>
                  <td>{person.helpFor}</td>
                  <td>{person.address}</td>
                  <td>{person.numReq}</td>
                  <td><button className="btn btn-primary"><a href="/offer-help" className="text-light offerBtn">Offer Help</a></button></td>
                </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
      <Footer/>
        </>
    )
}

export default Home;