import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, initializeFirestore, persistentLocalCache, persistentMultipleTabManager } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Firebase configuration
const firebaseConfig = {
//   apiKey: "AIzaSyD67pl8RAdt_t306GKS704bVqFHAR78zNE",
//   authDomain: "boneandjoints-17da3.firebaseapp.com",
//   projectId: "boneandjoints-17da3",
//   storageBucket: "boneandjoints-17da3.firebasestorage.app",
//   messagingSenderId: "447832340957",
//   appId: "1:447832340957:web:fc926308e38cfc55459e34"
apiKey: "AIzaSyAHaYMT_jYnLqrPnKyUnI4ES8VzmMw_3Vg",
authDomain: "mayurchildcarecenter.firebaseapp.com",
projectId: "mayurchildcarecenter",
storageBucket: "mayurchildcarecenter.firebasestorage.app",
messagingSenderId: "118324665230",
appId: "1:118324665230:web:c58231174106937808e2df",
// measurementId: "G-B5TFKW0V2V"
};

// Initialize Firebase only if it hasn't been initialized already
let app;
let db;

if (typeof window !== 'undefined') {
  if (!getApps().length) {
    app = initializeApp(firebaseConfig);
  } else {
    app = getApps()[0];
  }

  // Initialize Firestore with persistent local cache
  db = initializeFirestore(app, {
    localCache: persistentLocalCache({
      tabManager: persistentMultipleTabManager(),
    }),
  });

  // Initialize analytics only in client-side
  if (typeof window !== 'undefined') {
    getAnalytics(app);
  }
}

export { app, db };