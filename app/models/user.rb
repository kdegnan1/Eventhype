class User < ApplicationRecord
    validates :session_token, :password_digest, :fname, :lname, presence: true 
    validates :email, presence: true, uniqueness: true 
    validates :password, length: {minimun: 6, allow_nil: true} 
    attr_reader :password 
    after_initialize :ensure_session_token 

    ##create associations ! 

    ##FIGVAPER 
    def self.find_by_credentials(email, password) 
        user = User.find_by(email: email)  
        return user if user && user.is_password?(password)
    end

    def is_password?(password) 
        pw = BCrpyt::Password.new(self.password_digest)
       pw.is_password?(password)
    end 

    def self.generate_session_token 
        SecureRandom.urlsafe_base64 
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password_digest)
    end 

    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end

    def reset_session_token
        self.session_token = self.class.generate_session_token
        self.save!
        self.session_token
    end 
end