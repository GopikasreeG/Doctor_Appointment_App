import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApplyDoctor from './pages/ApplyDoctor';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Userslist from './pages/Admin/UsersList';
import DoctorsList from './pages/Admin/DoctorsList';
import Profile from './pages/Doctor/Profile';
import BookAppointment from './pages/BookAppointment';
import Appointments from './pages/appointments';
import DoctorAppointments from './pages/Doctor/DoctorAppointment';
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';
import Notifications from './pages/Notifications';
function App() {
   const { loading }= useSelector(state=>state.alerts);
  return (
    <>
      <BrowserRouter>
      {loading && (
        <div className="spinner-parent">
          < div class="spinner-border" role="status">
        </div>
        </div>
      )}
      <Toaster position="top-center" reverseOrder={false} />
        <Routes>
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>}/>
          <Route path="/register" element={<PublicRoute><Register/></PublicRoute>} />
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/apply-doctor" element={<ProtectedRoute><ApplyDoctor /></ProtectedRoute>}/>
          <Route path="/notifications" element={<ProtectedRoute><Notifications /></ProtectedRoute>}/>
          <Route path="/admin/userslist"element={<ProtectedRoute><Userslist /></ProtectedRoute>}/>
          <Route path="/admin/doctorslist"element={<ProtectedRoute><DoctorsList /></ProtectedRoute>}/>
          <Route path="/doctor/profile/:userId"element={<ProtectedRoute><Profile /></ProtectedRoute>}/>
          <Route path="/book-appointment/:doctorId" element={<ProtectedRoute><BookAppointment /></ProtectedRoute>}/>
          <Route path="/appointments"element={ <ProtectedRoute> <Appointments /></ProtectedRoute> } />
          <Route path="/doctor/appointments" element={<ProtectedRoute><DoctorAppointments /> </ProtectedRoute>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
