import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
//import { Doughnut } from 'react-chartjs-2';

import Basketball from "../assets/images/basketball.png"
import Football from "../assets/images/soccer-ball.png"
import Cricket from "../assets/images/cricket.png"
import Badminton from "../assets/images/shuttlecock.png"


//ChartJS.register(ArcElement, Tooltip, Legend);

// export const data1 = {
//   labels: ['Football', 'New Reg.'],
//   datasets: [
//     {
//       label: '# of Votes',
//       data: [5, 20],
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//       ],
//       borderColor: [
//         'rgba(255, 99, 132, 1)',
//         'rgba(54, 162, 235, 1)',
//       ],
//       borderWidth: 1,
//     },
//   ],
// };

// export const data2 = {
//   labels: ['Basketball', 'New Reg.'],
//   datasets: [
//     {
//       label: '# of Votes',
//       data: [6, 19],
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//       ],
//       borderColor: [
//         'rgba(255, 99, 132, 1)',
//         'rgba(54, 162, 235, 1)',
//       ],
//       borderWidth: 1,
//     },
//   ],
// };

// export const data3 = {
//   labels: ['Cricket', 'New Reg.'],
//   datasets: [
//     {
//       label: '# of Votes',
//       data: [4, 21],
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//       ],
//       borderColor: [
//         'rgba(255, 99, 132, 1)',
//         'rgba(54, 162, 235, 1)',
//       ],
//       borderWidth: 1,
//     },
//   ],
// };

// export const data4 = {
//   labels: ['Badminton', 'New Reg.'],
//   datasets: [
//     {
//       label: 'New Reg.',
//       data: [9, 16],
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//       ],
//       borderColor: [
//         'rgba(255, 99, 132, 1)',
//         'rgba(54, 162, 235, 1)',
//       ],
//       borderWidth: 1,
//     },
//   ],
// };

function Dashboard() {


  return (
    <div className="container_layout">
      <h4 className="page_title">Dashboard</h4>
      <div className='content_container'>
        <div className='col'>
          <div className='control-pane'>
            <div className='control-section'>
              <div className='row'>
                <div className='col-3'>
                  <div className='box-container'>
                    <h4 className='boxHeading'>Football</h4>
                    <div className='row'>
                      <div className='col-4'>
                        <img src={Football} className='boxIcon' />
                      </div>
                      <div className='col-8'>
                        <p>Curr. Month Registration: <span className='numBadge'>52</span></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-3'>
                  <div className='box-container'>
                    <h4 className='boxHeading'>Football</h4>
                    <div className='row'>
                      <div className='col-4'>
                        <img src={Basketball} className='boxIcon1' />
                      </div>
                      <div className='col-8'>
                        <p>Curr. Month Registration: <span className='numBadge'>52</span></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-3'>
                  <div className='box-container'>
                    <h4 className='boxHeading'>Cricket</h4>
                    <div className='row'>
                      <div className='col-4'>
                        <img src={Cricket} className='boxIcon' />
                      </div>
                      <div className='col-8'>
                        <p>Curr. Month Registration: <span className='numBadge'>52</span></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-3'>
                  <div className='box-container'>
                    <h4 className='boxHeading'>Badminton</h4>
                    <div className='row'>
                      <div className='col-4'>
                        <img src={Badminton} className='boxIcon1' />
                      </div>
                      <div className='col-8'>
                        <p>Curr. Month Registration: <span className='numBadge'>52</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
