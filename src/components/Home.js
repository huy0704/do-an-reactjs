import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";

const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="boxChat">
        <div className="sidebar">
          <div className="search">
            <input className="inputSearch" placeholder="Search...." />
          </div>
          <div className="users">
            <div className="user1">
              <ten>vinh huy</ten>
              <div className="cube1"></div>
              <img src="https://png.pngtree.com/png-vector/20190115/ourlarge/pngtree-cartoon-avatar-smiley-face-lovely-png-image_338649.jpg" />
            </div>
            <div className="user2">
              <ten>tran man</ten>
              <div className="cube2"></div>
              <img src="https://png.pngtree.com/png-vector/20190115/ourlarge/pngtree-cartoon-avatar-smiley-face-lovely-png-image_338649.jpg" />
            </div>
            <div className="user3">
              <ten>van dat</ten>
              <div className="cube3"></div>
              <img src="https://png.pngtree.com/png-vector/20190115/ourlarge/pngtree-cartoon-avatar-smiley-face-lovely-png-image_338649.jpg" />
            </div>
            <div className="user4">
              <ten>van teo</ten>
              <div className="cube4"></div>
              <img src="https://png.pngtree.com/png-vector/20190115/ourlarge/pngtree-cartoon-avatar-smiley-face-lovely-png-image_338649.jpg" />
            </div>
          </div>
        </div>
        <div className="chat">
          <div className="header">
            <text>Chat with vinh huy</text>
            <p>Online</p>
            <div className="cube"></div>
            <email>{user && user.email}</email>
            <img src="https://png.pngtree.com/png-vector/20190115/ourlarge/pngtree-cartoon-avatar-smiley-face-lovely-png-image_338649.jpg" />
            <div className="btnLogOut">
              <div className="d-grid gap-2">
                <Button variant="primary" onClick={handleLogout}>
                  Log out
                </Button>
              </div>
            </div>
          </div>
          <div className="chatInput">
            <input className="inputChat" type="text" />
            <button>Send</button>
          </div>
          <div className="rep1">
            <div className="chat1">Hi,vinh huy</div>
            <div className="onl1"></div>
            <img src="https://png.pngtree.com/png-vector/20190115/ourlarge/pngtree-cartoon-avatar-smiley-face-lovely-png-image_338649.jpg" />
          </div>
          <div className="rep2">
            <div className="chat2">Hi,friend how are u?</div>

            <img src="https://png.pngtree.com/png-vector/20190115/ourlarge/pngtree-cartoon-avatar-smiley-face-lovely-png-image_338649.jpg" />
            <div className="onl2"></div>
          </div>
        </div>
      </div>
      {/* <div className="p-4 box mt-3 text-center">
        Hello Welcome <br />
        {user && user.email}
      </div>
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div> */}
    </>
  );
};

export default Home;
