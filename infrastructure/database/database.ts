import { SQLiteDatabase } from "expo-sqlite";

export async function inicializarBaseDatos(db: SQLiteDatabase) {

    console.log('[DB INIT] Creando tabla pedidos si no exite');

    await db.execAsync(`
    PRAGMA journal_mode = WAL;
    
    Create TABLE IF NOT EXISTS pedidos(
     id INTEGER PRIMARY KEY AUTOINCREMENT,
     fecha DATE NOT NULL,
     total DECIMAL NOT NULL,
     estado TEXT NOT NULL DEFAULT 'PENDIENTE',
     cantidad_productos INT NOT NULL
    );
    `
    );
} 