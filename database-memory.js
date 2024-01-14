import { RandomUUID } from "node:crypto"

class DatabaseMemory{
    #videos = new Map ()

    list() { 
         this.#videos.values()
     }
    
    create(video) {
       const videoId = RandomUUID()
       
        this.#videos.set(videoId,video)
    }

    update(id, video) {
        this.#videos.push(id, video)
    }

    delete(id) {
        this.#videos.delete(id)
    }
}