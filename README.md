# Unique field Component

The project demonstrates setting up a unique field validation in angular using a backend `HTTP`.

## `HTTP` response template

The test backend returns a JSON response object with a message field. The message is validated to contain the word `kwaku` (case coerced)

```
export interface Resp 
{ 
    message: string 
}
```

## Testing

Type anything apart from `kwaku` (case insensitive) is okay. The validation rule `unqMrn` is set if you type `kwaku`.

## Error treatement
HTTP errors are ignored and the form is set to valid

