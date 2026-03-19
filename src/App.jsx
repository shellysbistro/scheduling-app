import React from 'react'

const shifts = [
  { day: 'Monday', staff: 'Nevada', role: 'Operations Supervisor', time: '8:00 AM - 4:00 PM', station: 'Service Floor' },
  { day: 'Monday', staff: 'Kitchen Line 1', role: 'Kitchen Staff', time: '9:00 AM - 5:00 PM', station: 'Short Line' },
  { day: 'Monday', staff: 'Pizza Room 1', role: 'Pizza Staff', time: '10:00 AM - 6:00 PM', station: 'Pizza Room' },
  { day: 'Tuesday', staff: 'Vivian', role: 'General Manager', time: '9:00 AM - 5:00 PM', station: 'Management' }
]

const staff = [
  { name: 'Vivian', role: 'General Manager', status: 'Available' },
  { name: 'Nevada', role: 'Operations Supervisor', status: 'Available' },
  { name: 'Jenna', role: 'HR & Admin', status: 'Available' },
  { name: 'Front Counter 1', role: 'Front of House', status: 'Available' },
  { name: 'Kitchen Line 1', role: 'Kitchen', status: 'Available' },
  { name: 'Pizza Room 1', role: 'Pizza Room', status: 'Available' }
]

export default function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', background: '#f4f4f4', minHeight: '100vh', padding: '24px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ background: '#fff', padding: '24px', borderRadius: '16px', marginBottom: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
          <h1 style={{ margin: 0, fontSize: '32px' }}>Shelly&apos;s Bistro Shift App</h1>
          <p style={{ color: '#555', marginTop: '8px' }}>
            Staff scheduling, team overview, and shift tracking for daily operations.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '24px' }}>
          <div style={{ background: '#fff', padding: '24px', borderRadius: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
            <h2>Weekly Shift Board</h2>
            {shifts.map((shift, index) => (
              <div
                key={index}
                style={{
                  border: '1px solid #ddd',
                  borderRadius: '12px',
                  padding: '16px',
                  marginBottom: '12px',
                  background: '#fafafa'
                }}
              >
                <strong>{shift.day}</strong>
                <div style={{ marginTop: '6px' }}>{shift.staff}</div>
                <div style={{ color: '#555' }}>{shift.role}</div>
                <div style={{ color: '#777' }}>{shift.time}</div>
                <div style={{ color: '#777' }}>Station: {shift.station}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gap: '24px' }}>
            <div style={{ background: '#fff', padding: '24px', borderRadius: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
              <h2>Staff Directory</h2>
              {staff.map((member, index) => (
                <div
                  key={index}
                  style={{
                    borderBottom: '1px solid #eee',
                    padding: '10px 0'
                  }}
                >
                  <div><strong>{member.name}</strong></div>
                  <div style={{ color: '#555' }}>{member.role}</div>
                  <div style={{ color: 'green', fontSize: '14px' }}>{member.status}</div>
                </div>
              ))}
            </div>

            <div style={{ background: '#fff', padding: '24px', borderRadius: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
              <h2>Announcements</h2>
              <ul style={{ paddingLeft: '18px', color: '#555' }}>
                <li>Bannock pizza orders go only to the Pizza Room.</li>
                <li>Lunch rush staff should report 15 minutes early.</li>
                <li>Managers to confirm shift handoff notes before closing.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
