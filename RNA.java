class RnaTranscription {

    String transcribe(String dnaStrand) {
        String RNA = "";
        
        if (dnaStrand.isEmpty())
            return "";

        for(int i = 0; i < dnaStrand.length(); i++){
            
		    RNA = RNA + change(dnaStrand.charAt(i));

        }
        return RNA;
    }

    String change(char c){
        switch(c){
                case 'G': return "C";
                case 'C':  return "G";
                case 'T':  return "A";
                case 'A':  return "U";
        }

        return null;
    }

}
