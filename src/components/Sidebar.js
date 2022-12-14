import { useState } from 'react';
import styled from "styled-components";  
import AdminNavbar from './AdminNavbar';
import { Link, NavLink } from "react-router-dom";  
import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';  
import "./br.css"
import unigig from "../assets/img/unigig.jpg"

 
 
export default function Sidebar() {

    const [showSidebar, setShowSidebar] = useState('-left-64');
    return (
        <>
            <AdminNavbar
                showSidebar={showSidebar} 
                setShowSidebar={setShowSidebar}  
            />
            <div
                className={` fixed   top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden  transition-all duration-300 bg-white`} >  

                         


                <Element7>
                

                <Line src={`https://file.rendit.io/n/HyUCUJJkXhfGGVECnrB6.svg`} />
                <PlumFlexColumn>

                  <div className='md:hidden ml-20 pl-20'>
                       <Button
                           
                            buttonType="link" 
                            size="lg"
                            iconOnly  
                            rounded
                            ripple="light"
                            onClick={() => setShowSidebar('-left-64')}
                        >
                            <Icon name="close" size="2xl" color="black" />
                        </Button> 
                  </div>
                
                  <NavLink to="/" exact  >
                  <ImageRoot src={unigig}  /> 
                  </NavLink>
     
                  <NavLink to="/create-new-account" >
                  <WhiteFlexRow>
                <Image1a src={`https://file.rendit.io/n/7OUSS3WQDM8590MQKxa2.svg`} />
                <Text2a>Create Account</Text2a> 
              </WhiteFlexRow>
              </NavLink>

                     <div className='focus:blue'>
                     <NavLink to="/" exact  >
                  <FlexRow2 margin={`0px 0px 33px 0px`} onClick={() => setShowSidebar('-left-64')}>
                    <NeonCarrotRectangle margin={`0px 21px 0px 0px`} />
                  
                    <Image1 src={`https://file.rendit.io/n/wf2zhCB3LkjFgVLkb6SX.svg`} />
                    <Text2  margin={`0px 88px 0px 0px`}  >
                      Dashboard</Text2> 
             
                  </FlexRow2> 
                  </NavLink>   
             
                     </div>

                     {/* className='text-xs leading-4 flex flex-row pr-11 mr-9 text-white focus:text-red-500 hover:text-red-500' */}
               

            
                  <FlexRow2 margin={`0px 0px 33px 0px`} >
                  <NeonCarrotRectangle margin={`0px 0px 0px 0px`} />                          
                      <div className='text-xs leading-4 flex flex-row pr-11 mr-9 text-white focus:text-red-500 hover:text-red-500'>
                 
                  <div className="dropdown ">
                    <button className="dropbtn flex flex-row">
                    <Image2 src={`https://file.rendit.io/n/G3F4PilonKjmmoO3vusP.svg`}  /> 
                      <Text2>Student</Text2> 
                    </button>
                    <div className="dropdown-content" onClick={() => setShowSidebar('-left-64')} >
                      <Link to="/activate">Activate</Link>
                      <Link to="/register-student">Register Student</Link>
                      <Link to="/course-reg-stats">Registration Stats</Link>
                      <Link to="/unblock">Unblock</Link>
                      <Link to="/biodata-correction">Biodata Correction</Link>
                      <Link to="/reset-studentpassword">Reset Password</Link>
                      <Link to="/upload-student-doc">Restrospective Registration</Link>
                    </div>
                  </div> 

                      </div> 
                    <Image4 src={`https://file.rendit.io/n/1udbBvAlXi9KxoIN8Mpq.svg`} />
                  </FlexRow2>
 
                  <FlexRow2 margin={`0px 0px 33px 0px`} >
                  <NeonCarrotRectangle margin={`0px 0px 0px 0px`} />                          
                      <div className='text-xs leading-4 flex flex-row pr-11 mr-9 text-white focus:text-red-500 hover:text-red-500'>
                      <div className="dropdown ">
                    <button className="dropbtn flex flex-row">
                    <Image2 src={`https://file.rendit.io/n/oPso6bQAGSo5jamPAFQx.svg`} /> 
                    <Text2>Lecturer</Text2> 
                    </button>
                    <div  className="dropdown-content" onClick={() => setShowSidebar('-left-64')}>
                    <Link to="/lecturer-activate">Activate</Link>
                      <Link to="/lecturer-list">Lecturer List</Link>
                      <Link to="/create-account">Create Account</Link>
                      <Link to="/lecturer-biodata">Biodata Correction</Link>
                      <Link to="/reset-lecturer-password">Reset Password</Link>
                      <Link to="/reset-upload-quota">Reset Upload Quota</Link>
                     
                    </div>
                  </div> 
                      </div> 
                    <Image4 src={`https://file.rendit.io/n/1udbBvAlXi9KxoIN8Mpq.svg`} />
                  </FlexRow2>
          

               
                  <FlexRow2 margin={`0px 0px 33px 0px`} >
                  <NeonCarrotRectangle margin={`0px 0px 0px 0px`} />                          
                      <div className='text-xs leading-4 flex flex-row pr-12 mr-0.5 text-white focus:text-red-500 hover:text-red-500'>
                      <div className="dropdown " >
                    <button className="dropbtn flex flex-row">
                    <Image2 src={`https://file.rendit.io/n/TjbIpolco2NXf4vdOE1s.svg`} /> 
                    <Text2>Master Sheet</Text2> 
                    </button> 
                    <div className="dropdown-content" onClick={() => setShowSidebar('-left-64')}>
                      <Link to="/master-sheet">Master Sheet</Link>
                      <Link to="/master-sheetmode">Master Sheet Mode</Link>
                    </div>
                  </div>  
                      </div> 
                    <Image4 src={`https://file.rendit.io/n/1udbBvAlXi9KxoIN8Mpq.svg`} />
                  </FlexRow2>

                  <FlexRow2 margin={`0px 0px 33px 0px`} >
                  <NeonCarrotRectangle margin={`0px 0px 0px 0px`} />                          
                      <div className='text-xs leading-4 flex flex-row pr-3 mr-0.5 text-white focus:text-red-500 hover:text-red-500'>
                      <div className="dropdown " >
                    <button className="dropbtn flex flex-row">
                    <Image2 src={`https://file.rendit.io/n/GnPut5ckDFay6QEsO4n7.svg`}  /> 
                    <Text2>Administrative Portal</Text2> 
                    </button> 
                    <div style={{overflowY: "scroll", height: "170px"}} className="dropdown-contentadmin" onClick={() => setShowSidebar('-left-64')}>
                      <Link to="/setcountdown">Set Registration Countdown</Link>
                      <Link to="/showresult">Show Result</Link>
                      <Link to="/showlecturer">Show Lecturer</Link>
                      <Link to="/public-service">Public Service Announcement</Link>
                      <Link to="/public-service-edition">Public Service Edition</Link>
                      <Link to="/activate-new-semester">Activate New Semester</Link>
                      <Link to="/bulk-sms">Bulk Sms</Link>
                      <Link to="/bulk-sms-edition">Bulk Sms Edition</Link>
                      <Link to="/import-new-student">Import New Student</Link>
                      <Link to="/create-new-department">Create New Department</Link>
                      <Link to="/create-new-programme">Create New Programme</Link>
                      <Link to="/create-new-course">Create New Course</Link>
                    </div>

                


                  </div>  
                      </div> 
                    {/* <Image4 src={`https://file.rendit.io/n/1udbBvAlXi9KxoIN8Mpq.svg`} /> */}
                  </FlexRow2>
             

                  <div className='focus:blue'>
                     <NavLink to="/settings-profile" exact  >
                  <FlexRow2 margin={`0px 0px 33px 0px`} onClick={() => setShowSidebar('-left-64')}>
                    <NeonCarrotRectangle margin={`0px 1px 0px 0px`} />
                  
                    <Image1 src={`https://file.rendit.io/n/XsTeL2ZFeiX6rPItCZ1V.svg`} />
                    <Text2  margin={`0px 88px 0px 0px`}  >
                      Settings</Text2> 
             
                  </FlexRow2> 
                  </NavLink>   
             
                     </div>


              




                  
                </PlumFlexColumn> 
                
              </Element7>
        


            </div>
        </>
    );
}

const ImageRoot = styled.img`
width: 120px;
height: px50;
padding-bottom:20px;

`;

const NeonCarrotRectangle = styled.div`
  width: 2px;
  height: 22px;
  background-color: #df8909;
  opacity: 0;
  margin: ${(props) => props.margin};
`;
const Text2 = styled.a`
  font-size: 12px;
  font-family: Roboto;
  line-height: 18px;
  color: #ffffff;
  margin: ${(props) => props.margin};
  
  &:hover {
    color: #df8909; 
  }

  &:focus {
    color: #df8909; 
  }

`;
const Image2 = styled.img`
  width: 17px;
  height: 17px;
  align-self: flex-end;
  margin: 0px 18px 2px 0px;
`;
const FlexRow2 = styled.div`
  width: 214px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.margin};

  &:hover {
    color: #df8909; 
  }

  &:focus {
    color: #df8909; 
  }


`;

const Image4 = styled.img`
  width: 6px;
  height: 9px;
  align-self: flex-end;
 
  margin: 0px 0px 6px 0px;
  &:hover {
    color: #df8909; 
  }

  &:focus {
    color: #df8909; 
  }
`;


const Element7 = styled.div`
  width: 237px;
  height: 900px;
  position: relative;
  flex-grow: 1; 
`;
const Line = styled.img`
  width: 38px;
  height: 4px;
  position: absolute;
  top: 699px;
  left: 106px;
`;
const PlumFlexColumn = styled.div`
  height: 818px;
  background-color: #250444;
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 41px 23px 41px 0px;
`;

const Image1 = styled.img`
  width: 16px;
  height: 16px;
  margin: 0px 18px 0px 0px;
  &:hover {
    color: #df8909; 
  }

  &:focus {
    color: #df8909; 
  }
`;


const WhiteFlexRow = styled.div`
  gap: 5px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-end;
  align-items: center;
  background-color: #ffffff;
  border-radius: 6px;
  padding: 11px 16px 11px 11px;
  margin: 0px 0px 37px 0px;
  margin-right:15px;
`;
const Image1a = styled.img`
  width: 24px;
  height: 24px;
`;

const Text2a = styled.div`
  align-self: flex-end;
  color: #2d0353;
  font-size: 14px;
  font-family: Product Sans Medium;
  line-height: 21.21px;
  white-space: nowrap;
`;


