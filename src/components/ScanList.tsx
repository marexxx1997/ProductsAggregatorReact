import React, { useEffect, useState } from 'react'

interface Scan {
    id: number
}

const ScanList = () => {
     const [scans, setScans] = useState<Scan[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/scans')
      .then((response) => response.json())
      .then((data) => {
        setScans(data);
      })
      .catch((error) => {
        console.error('Greška prilikom dobavljanja scanova:', error);
      });
  }, []);
  return (
    <div>
      <h1>Scanovi</h1>
      <ul>
        {scans.map((scan) => (
          <li key={scan.id}>{scan.id}</li>
        ))}
      </ul>
    </div>
  )
}

export default ScanList