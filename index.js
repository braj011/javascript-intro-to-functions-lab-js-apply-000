
function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

<<<<<<< HEAD

/*
function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
    return "I can't hear you!"
  }
}    */

function sayHiToGrandma(string) {
  if (whisper(string) === string) {
    return "I can't hear you!"
  } else if (shout(string) === string) {
    return "YES INDEED!"
  } else if ( string === "I love you, Grandma.") {
    return "I love you, too."
=======
function sayHiToGrandma(string) {
  if (string.toLowerCase === lowercase) {
    return 
>>>>>>> 0057bd9f391fb750a3b611e997b45f60c3b1b44c
  }
}



/*
describe('sayHiToGrandma(string)', function() {
  it('returns "I can\'t hear you!" if `string` is lowercase', function() {
    expect(sayHiToGrandma('hello')).toEqual("I can't hear you!")
  })

  it('returns "YES INDEED!" if `string` is uppercase', function() {
    expect(sayHiToGrandma('HELLO')).toEqual("YES INDEED!")
  })

  it('returns "I love you, too." if `string` is "I love you, Grandma."`', function() {
    expect(sayHiToGrandma("I love you, Grandma.")).toEqual("I love you, too.")
  })
})



*/ 