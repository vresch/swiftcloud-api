-- CreateTable
CREATE TABLE "SongStat" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "song" TEXT NOT NULL,
    "artist" TEXT NOT NULL,
    "writer" TEXT NOT NULL,
    "album" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "playsJune" INTEGER NOT NULL,
    "playsJuly" INTEGER NOT NULL,
    "playsAugust" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "SongStat_song_key" ON "SongStat"("song");
