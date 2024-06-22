"use client"

import { useState } from 'react';
import Navbar from "@/app/component/Navbar/page";
import Footer from "@/app/component/Footer/page";

export default function Home() {
  const [name, setName] = useState('');
  const [kodam, setKodam] = useState('');
  const [isKodamGenerated, setIsKodamGenerated] = useState(false);

  const kodamList = [
    'Harimau', 'Elang', 'Singa', 'Serigala', 'Kucing', 'Kuda', 'Gajah', 'Panda',
    'Ular', 'Burung Hantu', 'Serigala Putih', 'Lumba-lumba', 'Hiu', 'Kelinci', 'Kura-kura', 'Rusa',
    'Bison', 'Beruang', 'Merak', 'Rajawali', 'Buaya', 'Kerbau', 'Katak', 'Monyet',
    'Ikan Paus', 'Badak', 'Musang', 'Tikus', 'Bebek', 'Angsa', 'Anjing Laut', 'Kanguru',
    'Koala', 'Kumbang', 'Capung', 'Lebah', 'Semut', 'Laba-laba', 'Kecoa', 'Kelelawar',
    'Bunglon', 'Iguana', 'Salamander', 'Beruang Kutub', 'Pinguin', 'Jaguar', 'Leopard', 'Gepard',
    'Zebu', 'Zebra', 'Pocong', 'Kuntilanak', 'Genderuwo', 'Wewe Gombel', 'Tuyul', 'Jelangkung', 'Sundel Bolong'
  ];

  const handleCheckKodam = () => {
    if (!isKodamGenerated) {
      if (name) {
        const randomKodam = kodamList[Math.floor(Math.random() * kodamList.length)];
        setKodam(randomKodam);
        setIsKodamGenerated(true);
      } else {
        alert('Masukkan nama kamu terlebih dahulu!');
      }
    } else {
      setName('');
      setKodam('');
      setIsKodamGenerated(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center justify-items-center pt-20">
        <div className="card w-96 bg-base-100 border shadow-xl">
          <figure className="px-10 pt-10">
            <img src="/gambar.jpg" alt="Gambar" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">CEK KODAM KAMU SEKARANG!</h2>
            {!isKodamGenerated && (
              <>
                <p>Masukkan Nama Kamu Dibawah Ini</p>
                <input
                  type="text"
                  placeholder="Nama Kamu"
                  className="input input-bordered w-full max-w-xs"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </>
            )}
            {isKodamGenerated && (
              <div className="mt-4 p-4 gap-4">
                <p>Nama Kamu: <strong>{name}</strong></p>
                <p>Kodam Kamu Adalah :</p>
                <p className='text-4xl'><strong>{kodam}</strong></p>
              </div>
            )}
            <div className="card-actions mt-4">
              <button className="btn btn-primary" onClick={handleCheckKodam}>
                {isKodamGenerated ? 'Cek Kodam Lainnya' : 'Cek Kodam'}
              </button>
            </div>
          </div>
        </div>
        <div className='fixed bottom-0'>
          <Footer />
        </div>
      </div>
    </div>
  );
}
