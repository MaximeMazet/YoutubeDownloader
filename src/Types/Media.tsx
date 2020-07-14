export class Media {

    private _mime: string
    private _code: string
    private _type: string
    private _quality: string
    private _size: string
    private _codec: string

    constructor (
                    mime: string, 
                    code: string,
                    type: string,
                    quality: string,
                    size: string,
                    codec: string
                ) {
        this._mime = mime
        this._code = code
        this._type = type
        this._quality = quality
        this._size = size
        this._codec = codec
    }

    get mime () :string {
        return this._mime
    }

    set mime (newMime: string) {
        this._mime = newMime
    }

    get code () :string {
        return this._code
    }

    set code (newCode: string) {
        this._code = newCode
    }

    get type () :string {
        return this._type
    }

    set type (newType: string) {
        this._type = newType
    }

    get quality () :string {
        return this._quality
    }

    set quality (newQuality: string) {
        this._quality = newQuality
    }

    get size () :string {
        return this._size
    }

    set size (newSize: string) {
        this._size = newSize
    }

    get codec () :string {
        return this._codec
    }

    set codec (newCodec: string) {
        this._codec = newCodec
    }
}